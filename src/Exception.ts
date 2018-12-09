'use strict';
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
     * Initializes a new instance of the Exception class.
     */
    public constructor();

    /**
     * Initializes a new instance of the Exception class with a specified error message.
     * 
     * @param message
     * The message that describes the error.
     */
    public constructor(message: string);

    /**
     * Initializes a new instance of the Exception class with a specified error message and a reference to the inner exception that is the cause of this exception.
     * 
     * @param message
     * The error message that explains the reason for the exception.
     * 
     * @param innerException 
     * The exception that is the cause of the current exception, or a null reference if no inner exception is specified.
     */
    public constructor(message: string, innerException: Exception);

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

        while (exception.InnerException != null)
        {
            exception = exception.InnerException;
        }

        return exception;
    }
}