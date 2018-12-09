import { isNullOrUndefined } from "util";

/**
 * Represents errors that occur during application execution.
 */
export class Exception extends Error
{
    /**
     * A collection of key/value pairs that provide additional user-defined information about the exception.
     */
    private data: any[];

    /**
     * The Exception instance that caused the current exception.
     */
    private innerException: Exception = null;

    /**
     * Initializes a new instance of the `Exception` class.
     *
     * @param message
     * A message that describes the current exception.
     *
     * @param innerException
     * The Exception instance that caused the current exception.
     */
    public constructor(message?: string, innerException?: Exception)
    {
        super(message);

        if (innerException)
        {
            this.innerException = innerException;
        }
    }

    /**
     * Gets a collection of key/value pairs that provide additional user-defined information about the exception.
     */
    public get Data(): any[]
    {
        return this.data;
    }

    /**
     * Gets the Exception instance that caused the current exception.
     */
    public get InnerException(): Exception
    {
        return this.innerException;
    }

    /**
     * Gets a message that describes the current exception.
     */
    public get Message(): string
    {
        return this.message;
    }

    /**
     * Gets a string representation of the immediate frames on the call stack.
     */
    public get StackTrace(): string
    {
        return this.stack;
    }

    /**
     * When overridden in a derived class, returns the Exception that is the root cause of one or more subsequent exceptions.
     */
    public GetBaseException(): Exception
    {
        let exception: Exception = this;

        while (!isNullOrUndefined(exception.InnerException))
        {
            exception = exception.InnerException;
        }

        return exception;
    }
}