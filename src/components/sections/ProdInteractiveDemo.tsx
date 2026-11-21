import React, { useState, useMemo } from 'react';
import { Badge } from '../common/Badge';
import { SparkleDoodle, StarDoodle } from '../common/FloralAccents';
import { predictXGB } from '../../utils/xgbPredictor';

interface FeatureState {
  duration: number;      // seconds: 10 - 1200
  scrollDepth: number;   // percentage: 0 - 100% (matching content.js scroll percentage)
  keyCount: number;      // count: 0 - 150
  switchCount: number;   // tab switches: 0 - 20 (tracked separately in extension worker)
}

export const ProdInteractiveDemo: React.FC = () => {
  const [features, setFeatures] = useState<FeatureState>({
    duration: 360,
    scrollDepth: 25,
    keyCount: 45,
    switchCount: 2,
  });

  const loadPreset = (preset: 'deep-work' | 'social-media' | 'coding') => {
    switch (preset) {
      case 'deep-work':
        setFeatures({ duration: 600, scrollDepth: 15, keyCount: 75, switchCount: 1 });
        break;
      case 'social-media':
        setFeatures({ duration: 60, scrollDepth: 85, keyCount: 4, switchCount: 12 });
        break;
      case 'coding':
        setFeatures({ duration: 320, scrollDepth: 35, keyCount: 50, switchCount: 3 });
        break;
    }
  };

  // Inference using the actual compiled XGBoost predictor from prod/extension/lib/xgb_compiled.js
  const inferenceResult = useMemo(() => {
    const { duration, scrollDepth, keyCount } = features;
    
    // In the active production extension worker (background.js), switchCount is tracked separately
    // while the compiled tree predictor receives 0 as a placeholder for modelSwitchCount.
    const modelSwitchCount = 0;
    const modelFeatures = [duration, scrollDepth, keyCount, modelSwitchCount];
    
    // Evaluated against calibrated decision threshold (0.86) established during training
    const threshold = 0.86;
    const result = predictXGB(modelFeatures, threshold);
    const probPercent = (result.prob * 100).toFixed(1);
    const isFocused = result.label === 1;

    return {
      prob: result.prob,
      probPercent,
      label: isFocused ? 'FOCUSED' : 'DISTRACTED',
      thresholdPercent: (threshold * 100).toFixed(0),
      featuresPassed: modelFeatures,
    };
  }, [features]);

  return (
    <section id="interactive-lab" className="py-14 sm:py-18 border-t border-border">
      <div className="space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-rose font-medium">
                Interactive ML Playground
              </span>
              <SparkleDoodle size={14} className="text-rose" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-ink font-normal">
              Test the Browser Inference Model
            </h2>
            <p className="text-ink-muted text-sm sm:text-base max-w-2xl font-sans">
              Adjust the simulated browsing indicators below. This demo runs the compiled XGBoost decision tree logic extracted directly from the <strong className="text-ink font-medium">Prod</strong> extension, evaluating predictions client-side in your browser.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-ink-muted mr-1">Presets:</span>
            <button
              onClick={() => loadPreset('deep-work')}
              className="px-3 py-1 rounded-full text-xs font-mono border border-border bg-surface-elevated hover:border-rose text-ink transition-colors"
            >
              ✦ Deep Work
            </button>
            <button
              onClick={() => loadPreset('social-media')}
              className="px-3 py-1 rounded-full text-xs font-mono border border-border bg-surface-elevated hover:border-rose text-ink transition-colors"
            >
              ✿ Social Media
            </button>
            <button
              onClick={() => loadPreset('coding')}
              className="px-3 py-1 rounded-full text-xs font-mono border border-border bg-surface-elevated hover:border-rose text-ink transition-colors"
            >
              ⋆ Focused Session
            </button>
          </div>
        </div>

        {/* Interactive Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls: Sliders (7 cols) */}
          <div className="lg:col-span-7 bg-surface-elevated border border-border rounded-3xl p-6 sm:p-8 shadow-soft space-y-6">
            <div className="flex items-center justify-between border-b border-border-subtle pb-3">
              <span className="font-mono text-xs font-medium text-ink-muted uppercase tracking-wider">
                Simulated Session Inputs
              </span>
              <span className="font-mono text-[11px] text-ink-faint">Compiled Decision Trees</span>
            </div>

            {/* Slider 1: Duration */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-ink">Active Session Duration</span>
                <span className="text-rose font-medium">
                  {features.duration}s ({Math.round((features.duration / 60) * 10) / 10}m)
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="1200"
                step="10"
                value={features.duration}
                onChange={(e) => setFeatures({ ...features, duration: Number(e.target.value) })}
                className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-rose"
              />
              <span className="text-[11px] font-mono text-ink-faint block">
                Continuous engagement time on the active tab (seconds).
              </span>
            </div>

            {/* Slider 2: Scroll Depth (Percentage: 0 - 100%) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-ink">Max Scroll Depth</span>
                <span className="text-rose font-medium">{features.scrollDepth}% of page</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={features.scrollDepth}
                onChange={(e) => setFeatures({ ...features, scrollDepth: Number(e.target.value) })}
                className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-rose"
              />
              <span className="text-[11px] font-mono text-ink-faint block">
                Relative vertical scroll progress measured by the content script (0% to 100%).
              </span>
            </div>

            {/* Slider 3: Keystrokes */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-ink">Keystroke Count</span>
                <span className="text-rose font-medium">{features.keyCount} keystrokes</span>
              </div>
              <input
                type="range"
                min="0"
                max="150"
                step="1"
                value={features.keyCount}
                onChange={(e) => setFeatures({ ...features, keyCount: Number(e.target.value) })}
                className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-rose"
              />
              <span className="text-[11px] font-mono text-ink-faint block">
                Passive keyboard activity tally (character text is never inspected or logged).
              </span>
            </div>

            {/* Slider 4: Tab Switching (Tracked separately notice) */}
            <div className="space-y-1.5 pt-1 border-t border-border-subtle">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-ink flex items-center gap-1.5">
                  <span>Tab Switches</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface-muted text-ink-muted border border-border-subtle">
                    Tracked Asynchronously
                  </span>
                </span>
                <span className="text-ink-muted font-medium">{features.switchCount} switches</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                step="1"
                value={features.switchCount}
                onChange={(e) => setFeatures({ ...features, switchCount: Number(e.target.value) })}
                className="w-full h-2 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-rose"
              />
              <span className="text-[11px] font-mono text-ink-faint block">
                * Note: In the production extension, tab switching events are recorded separately in Chrome local storage; the active XGBoost decision tree path evaluates this input as 0.
              </span>
            </div>

            <div className="pt-2 text-xs text-ink-muted font-sans border-t border-border-subtle flex items-center gap-2">
              <StarDoodle size={12} className="text-rose flex-shrink-0" />
              <span>Privacy notice: This simulation runs entirely in client-side memory. No browsing activity is captured or transmitted.</span>
            </div>
          </div>

          {/* Results Display (5 cols) */}
          <div className="lg:col-span-5 bg-surface-elevated border border-border rounded-3xl p-6 sm:p-8 shadow-soft flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <span className="font-mono text-xs font-medium text-ink-muted uppercase tracking-wider">
                  Model Output
                </span>
                <span className="font-mono text-xs text-accent-green">Evaluated in RAM</span>
              </div>

              {/* Status Display Card */}
              <div
                className={`p-5 rounded-2xl border transition-colors ${
                  inferenceResult.label === 'FOCUSED'
                    ? 'bg-accent-greenSubtle/60 border-accent-green/30 text-accent-green'
                    : 'bg-rose-subtle/80 border-rose-border text-rose-dark dark:text-rose'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                    Classification
                  </span>
                  <Badge variant={inferenceResult.label === 'FOCUSED' ? 'green' : 'rose'} size="sm">
                    Score: {inferenceResult.probPercent}%
                  </Badge>
                </div>
                
                <div className="font-display text-3xl font-semibold tracking-tight">
                  {inferenceResult.label}
                </div>
                
                <div className="mt-2 text-xs font-mono flex items-center justify-between pt-2 border-t border-current/15">
                  <span className="opacity-80">Decision Threshold:</span>
                  <strong className="underline underline-offset-2">{inferenceResult.thresholdPercent}%</strong>
                </div>
              </div>

              {/* Technical Telemetry Inspector */}
              <div className="space-y-3 pt-1">
                <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block">
                  Model Telemetry
                </span>

                <div className="p-3.5 rounded-2xl bg-surface-muted/60 border border-border-subtle space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center text-ink-muted">
                    <span>Engine:</span>
                    <span className="text-ink">Compiled XGBoost Trees</span>
                  </div>
                  <div className="flex justify-between items-center text-ink-muted">
                    <span>Function:</span>
                    <span className="text-ink font-semibold">predictXGB(features, 0.86)</span>
                  </div>
                  <div className="flex justify-between items-center text-ink-muted">
                    <span>Output Probability:</span>
                    <span className="text-plum dark:text-rose font-medium">{inferenceResult.prob.toFixed(4)}</span>
                  </div>
                  <div className="flex justify-between items-center text-ink-muted">
                    <span>Threshold Comparison:</span>
                    <span className={inferenceResult.label === 'FOCUSED' ? 'text-accent-green font-medium' : 'text-rose font-medium'}>
                      {inferenceResult.prob >= 0.86 ? '≥ 0.86 (Focused)' : '< 0.86 (Distracted)'}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-border-subtle text-[11px] text-ink-faint">
                    Passed Vector: [{inferenceResult.featuresPassed.join(', ')}]
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-surface-muted/50 border border-border-subtle text-[11px] font-mono text-ink-muted leading-relaxed">
              * Note: The active production extension uses binary decision boundaries compiled from XGBoost trees; it does not compute per-feature attribution bars during inference.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
