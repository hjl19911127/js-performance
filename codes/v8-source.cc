// 函数至少要在栈中出现的次数
static const int kProfilerTicksBeforeOptimization = 2;
// The number of ticks required for optimizing a function increases with
// the size of the bytecode. This is in addition to the
// kProfilerTicksBeforeOptimization required for any function.
static const int kBytecodeSizeAllowancePerTick = 1200;
// Maximum size in bytes of generated code for a function to be optimized
// the very first time it is seen on the stack.
static const int kMaxBytecodeSizeForEarlyOpt = 90;
// Certain functions are simply too big to be worth optimizing.
static const int kMaxBytecodeSizeForOpt = 60 * KB;

OptimizationReason RuntimeProfiler::ShouldOptimize(JSFunction* function,
                                                   JavaScriptFrame* frame) {
  SharedFunctionInfo* shared = function->shared();
  int ticks = function->feedback_vector()->profiler_ticks();

  // 生成的bytecode大于60kb，跳出
  if (shared->GetBytecodeArray()->length() > kMaxBytecodeSizeForOpt) {
    return OptimizationReason::kDoNotOptimize;
  }
  int ticks_for_optimization = kProfilerTicksBeforeOptimization +
      (shared->GetBytecodeArray()->length() / kBytecodeSizeAllowancePerTick);
  if (ticks >= ticks_for_optimization) {
    return OptimizationReason::kHotAndStable;
  } else if (!any_ic_changed_ &&
    shared->GetBytecodeArray()->length() < kMaxBytecodeSizeForEarlyOpt) {
    // If no IC was patched since the last tick and this function is very
    // small, optimistically optimize it now.
    return OptimizationReason::kSmallFunction;
  }
  return OptimizationReason::kDoNotOptimize;
}

if (compilation_info()->bytecode_array()->length() >
  FLAG_max_optimized_bytecode_size) {
    return AbortOptimization(BailoutReason::kFunctionTooBig);
}


OptimizationReason RuntimeProfiler::ShouldOptimize(JSFunction* function,
  // 生成的bytecode大于60kb，跳出
  if (shared->GetBytecodeArray()->length() > kMaxBytecodeSizeForOpt) {
      return OptimizationReason::kDoNotOptimize;
  }
}
