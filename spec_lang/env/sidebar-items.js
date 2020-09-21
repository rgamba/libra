initSidebarItems({"constant":[["ABORTS_IF_IS_PARTIAL_PRAGMA","Pragma indicating whether aborts_if specification should be considered partial."],["ABORTS_IF_IS_STRICT_PRAGMA","Pragma indicating whether no explicit aborts_if specification should be treated like `aborts_if` false."],["ADDITION_OVERFLOW_UNCHECKED_PRAGMA","Pragma indicating that adding u64 or u128 values should not be checked for overflow."],["ALWAYS_ABORTS_TEST_PRAGMA","Pragma indicating that the function will run smoke tests"],["ASSUME_NO_ABORT_FROM_HERE_PRAGMA","Pragma indicating that aborts from this function shall be ignored."],["CONDITION_ABORT_ASSERT_PROP","Property which indicates that an aborts_if should be asserted. For callers of a function with such an aborts_if, the negation of the condition becomes an assertion."],["CONDITION_ABORT_ASSUME_PROP","Property which indicates that an aborts_if should be assumed. For callers of a function with such an aborts_if, the negation of the condition becomes an assumption."],["CONDITION_ABSTRACT_PROP","Abstract property which can be used together with an opaque specification. An abstract property is not verified against the implementation, but will be used for the function's behavior in the application context. This allows to \"override\" the specification with a more abstract version. In general we would need to prover the abstraction is subsumed by the implementation, but this is currently not done."],["CONDITION_CHECK_ABORT_CODES_PROP","A property which can be attached to an aborts_with to indicate that it should act as check whether the function produces exactly the provided number of error codes."],["CONDITION_CONCRETE_PROP","Opposite to the abstract property."],["CONDITION_DEACTIVATED_PROP","A property which can be attached to any condition to exclude it from verification. The condition will still be type checked."],["CONDITION_EXPORT_PROP","Property which can be attached to conditions to make them exported into the VC context even if they are injected."],["CONDITION_GLOBAL_PROP","Property which can be attached to a module invariant to make it global."],["CONDITION_INJECTED_PROP","Internal property attached to conditions if they are injected via an apply or a module invariant."],["CONDITION_ISOLATED_PROP","Property which can be attached to a global invariant to mark it as not to be used as an assumption in other verification steps. This can be used for invariants which are nonoperational constraints on system behavior, i.e. the systems \"works\" whether the invariant holds or not. Invariant marked as such are not assumed when memory is accessed, but only in the pre-state of a memory update."],["EXPORT_ENSURES_PRAGMA","Pragma which indicates that the function's abort and ensure conditions shall be exported to the verification context even if the implementation of the function is inlined."],["INTRINSIC_PRAGMA","Pragma indicating whether implementation of function should be ignored and instead treated to be like a native function."],["OPAQUE_PRAGMA","Pragma indicating whether implementation of function should be ignored and instead interpreted by its pre and post conditions only."],["REQUIRES_IF_ABORTS_PRAGMA","Pragma indicating that requires are also enforced if the aborts condition is true."],["SCRIPT_BYTECODE_FUN_NAME","Names used in the bytecode/AST to represent the main function of a script"],["SCRIPT_MODULE_NAME","Constants A name we use to represent a script as a module."],["SEED_PRAGMA","Pragma defining a random seed."],["TIMEOUT_PRAGMA","Pragma defining a timeout."],["VERIFY_DURATION_ESTIMATE_PRAGMA","Pragma indicating an estimate how long verification takes. Verification is skipped if the timeout is smaller than this."],["VERIFY_PRAGMA","Pragma indicating whether verification should be performed for a function."]],"enum":[["ConditionTag","A tag used to be associated with a condition info. Condition infos are identified in the environment by a pair of Loc and this type."],["TypeConstraint",""],["VerificationScope","Verification Scope Defines what functions to verify."]],"fn":[["is_pragma_valid_for_block","Checks whether a pragma is valid in a specific spec block."],["is_property_valid_for_condition","A function which determines whether a property is valid for a given condition kind."]],"struct":[["ConditionInfo","Information about a verification condition stored in the environment."],["FieldData","Field Environment"],["FieldEnv",""],["FieldId","Identifier for a field of a structure, relative to struct."],["FunId","Identifier for a Move function, relative to module."],["FunctionData",""],["FunctionEnv",""],["GlobalEnv","Global Environment Global environment for a set of modules."],["GlobalId","A global id. Instances of this type represent unique identifiers relative to `GlobalEnv`."],["Loc","Locations A location, consisting of a FileId and a span in this file."],["ModuleData","Module Environment Represents data for a module."],["ModuleEnv","Represents a module environment."],["ModuleId","Identifier for a module."],["NamedConstantData","Named Constant Environment"],["NamedConstantEnv",""],["NamedConstantId","Identifier for a named constant, relative to module."],["NodeId","Identifier for a node in the AST, relative to a module. This is used to associate attributes with the node, like source location and type."],["Parameter","Represents a parameter."],["QualifiedId",""],["SchemaId","Identifier for a schema."],["SpecFunId","Identifier for a specification function, relative to module."],["SpecVarId","Identifier for a specification variable, relative to module."],["StructData","Struct Environment"],["StructEnv",""],["StructId","Identifier for a structure/resource, relative to module."],["TypeParameter","Function Environment Represents a type parameter."]],"type":[["MoveIrLoc","Alias for the Loc variant of MoveIR. This uses a `&static str` instead of `FileId` for the file name."]]});