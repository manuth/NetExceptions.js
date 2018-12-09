import { Exception } from "./Exception";

/**
 * The exception that is thrown when the key specified for accessing an element in a collection does not match any key in the collection.
 */
export class KeyNotFoundException extends Exception
{
    /**
     * Initializes a new instance of the KeyNotFoundException class using default property values.
     */
    public constructor();

    /**
     * Initializes a new instance of the KeyNotFoundException class with the specified error message.
     * 
     * @param message
     * The message that describes the error.
     */
    public constructor(message: string);

    /**
     * Initializes a new instance of the KeyNotFoundException class with the specified error message and a reference to the inner exception that is the cause of this exception.
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
                super (message, innerException);
                break;
        }
    }
}