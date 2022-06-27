import { ArgumentExceptionTests } from "./ArgumentException.test.js";
import { CultureNotFoundExceptionTests } from "./CultureNotFoundException.test.js";
import { ExceptionTests } from "./Exception.test.js";
import { FileNotFoundExceptionTests } from "./FileNotFoundException.test.js";
import { IOExceptionTests } from "./IOException.test.js";
import { KeyNotFoundExceptionTests } from "./KeyNotFoundException.test.js";
import { TimeoutExceptionTests } from "./TimeoutException.test.js";
import { UnauthorizedAccessExceptionTests } from "./UnauthorizedAccessException.test.js";

suite(
    "NetExceptions.js",
    () =>
    {
        ExceptionTests();
        KeyNotFoundExceptionTests();
        TimeoutExceptionTests();
        ArgumentExceptionTests();
        CultureNotFoundExceptionTests();
        IOExceptionTests();
        FileNotFoundExceptionTests();
        UnauthorizedAccessExceptionTests();
    });
