import { Exception } from './Exception';
const Format = require('string-format');

/**
 * The exception that is thrown when the operating system denies access because of an I/O error or a specific type of security error.
 */
export class UnauthorizedAccessException extends Exception
{
    /**
     * Initializes a new instance of the UnauthorizedAccessException class.
     */
    public constructor();

    /**
     * Initializes a new instance of the UnauthorizedAccessException class with a specified error message.
     * 
     * @param message
     * The message that describes the error.
     */
    public constructor(message: string);

    /**
     * Initializes a new instance of the UnauthorizedAccessException class with a specified error message and a reference to the inner exception that is the cause of this exception.
     * 
     * @param message
     * The error message that explains the reason for the exception.
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