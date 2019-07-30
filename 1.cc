OptimizationReason RuntimeProfiler::ShouldOptimize(JSFunction function,
                                                   BytecodeArray bytecode) {
  int ticks = function->feedback_vector()->profiler_ticks();
  int ticks_for_optimization =
      kProfilerTicksBeforeOptimization +
      (bytecode->length() / kBytecodeSizeAllowancePerTick);
  if (ticks >= ticks_for_optimization) {
    return OptimizationReason::kHotAndStable;
  } else if (!any_ic_changed_ &&
             bytecode->length() < kMaxBytecodeSizeForEarlyOpt) {
    // If no IC was patched since the last tick and this function is very
    // small, optimistically optimize it now.
    return OptimizationReason::kSmallFunction;
  } else if (FLAG_trace_opt_verbose) {
    PrintF("[not yet optimizing ");
    function->PrintName();
    PrintF(", not enough ticks: %d/%d and ", ticks,
           kProfilerTicksBeforeOptimization);
    if (any_ic_changed_) {
      PrintF("ICs changed]\n");
    } else {
      PrintF(" too large for small function optimization: %d/%d]\n",
             bytecode->length(), kMaxBytecodeSizeForEarlyOpt);
    }
  }
  return OptimizationReason::kDoNotOptimize;
}

if (compilation_info()->bytecode_array()->length() >
  FLAG_max_optimized_bytecode_size) {
    return AbortOptimization(BailoutReason::kFunctionTooBig);
}
