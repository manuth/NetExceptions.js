import { Exception } from "./Exception";

/**
 * The exception that is thrown when the time allotted for a process or operation has expired.
 */
export class TimeoutException extends Exception
{
    /**
     * Initializes a new instance of the TimeoutException class.
     */
    public constructor();

    /**
     * Initializes a new instance of the TimeoutException class with the specified error message.
     * 
     * @param message
     * The message that describes the error.
     */
    public constructor(message: string)

    /**
     * Initializes a new instance of the TimeoutException class with the specified error message and inner exception.
     * 
     * @param message
     * The message that describes the error.
     * 
     * @param innerException
     * The exception that is the cause of the current exception. If the _innerException_ parameter is not **null**, the current exception is raised in a **catch** block that handles the inner exception.
     */
    public constructor(message: string, innerException: Exception);

    public constructor(message?: string, innerException?: Exception)
    {
        switch (arguments.length)
        {
            case 0:
                super();
                break;
            case 1:
                super(message);
                break;
            case 2:
                super(message, innerException);
                break;
        }
    }
}