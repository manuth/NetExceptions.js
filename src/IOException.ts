import { Exception } from './Exception';

/**
 * The exception that is thrown when an I/O error occurs.
 */
export class IOException extends Exception
{
    /**
     * Initializes a new instance of the IOException class with its message string set to the empty string (""), and its inner exception set to a **null** reference.
     */
    public constructor();

    /**
     * Initializes a new instance of the IOException class with its message string set to _message_, and its inner exception set to **null**.
     * 
     * @param message
     * A String that describes the error. The content of _message_ is intended to be understood by humans. The caller of this constructor is required to ensure that this string has been localized for the current system culture.
     */
    public constructor(message: string);

    /**
     * Initializes a new instance of the IOException class with a specified error message and a reference to the inner exception that is the cause of this exception.
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
                super (message);
                break;
            case 2:
                super(message, innerException);
                break;
        }
    }
}