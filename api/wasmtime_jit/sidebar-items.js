initSidebarItems({"constant":[["VERSION","Version number of this crate."]],"enum":[["ActionError","An error detected while invoking a wasm function or reading a wasm global. Note that at this level, traps are not reported errors, but are rather returned through `ActionOutcome`."],["ActionOutcome","The result of invoking a wasm function or reading a wasm global."],["CompilationStrategy","Select which kind of compilation to use."],["ContextError","Error message used by `WastContext`."],["InstantiationError","An error while instantiating a module."],["RuntimeValue","A runtime value."],["SetupError","An error condition while setting up a wasm instance, be it validation, compilation, or instantiation."]],"fn":[["instantiate","Create a new wasm instance by compiling the wasm module in `data` and instatiating it."],["invoke","Invoke a function through an `InstanceHandle` identified by an export name."],["link_module","Links a module that has been compiled with `compiled_module` in `wasmtime-environ`."],["target_tunables","Return a `Tunables` instance tuned for the given target platform."]],"mod":[["native",""],["trampoline",""]],"struct":[["CodeMemory","Memory manager for executable code."],["CompiledModule","A compiled wasm module, ready to be instantiated."],["Compiler","A WebAssembly code JIT compiler."],["Context","A convenient context for compiling and executing WebAssembly instances."],["Features","The collection of features configurable during compilation"],["InstanceHandle","A handle holding an `Instance` of a WebAssembly module."],["Namespace","A namespace containing instances keyed by name."],["NullResolver","`Resolver` implementation that always resolves to `None`."],["UnknownInstance","Indicates an unknown instance was specified."]],"trait":[["Resolver","Import resolver connects imports with available exported values."]]});