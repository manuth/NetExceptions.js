import { ArgumentExceptionTests } from "./ArgumentException.test";
import { CultureNotFoundExceptionTests } from "./CultureNotFoundException.test";
import { ExceptionTests } from "./Exception.test";
import { FileNotFoundExceptionTests } from "./FileNotFoundException.test";
import { IOExceptionTests } from "./IOException.test";
import { KeyNotFoundExceptionTests } from "./KeyNotFoundException.test";
import { TimeoutExceptionTests } from "./TimeoutException.test";
import { UnauthorizedAccessExceptionTests } from "./UnauthorizedAccessException.test";

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
