import { Exception } from "./Exception";

/**
 * The exception that is thrown when one of the arguments provided to a method is not valid.
 */
export class ArgumentException extends Exception
{
    /**
     * The name of the parameter that causes this exception.
     */
    private paramName: string;

    /**
     * Initializes a new instance of the ArgumentException class.
     */
    public constructor();

    /**
     * Initializes a new instance of the ArgumentException class with a specified error message.
     * 
     * @param message
     * The error message that explains the reason for the exception.
     */
    public constructor(message: string);

    /**
     * Initializes a new instance of the ArgumentException class with a specified error message and a reference to the inner exception that is the cause of this exception.
     * 
     * @param message
     * The error message that explains the reason for the exception.
     * 
     * @param innerException 
     * The exception that is the cause of the current exception. If the innerException parameter is not a null reference, the current exception is raised in a catch block that handles the inner exception.
     */
    public constructor(message: string, innerException: Exception);

    /**
     * Initializes a new instance of the ArgumentException class with a specified error message and the name of the parameter that causes this exception.
     * 
     * @param message 
     * The error message that explains the reason for the exception.
     * 
     * @param paramName 
     * The name of the parameter that caused the current exception.
     */
    public constructor(message: string, paramName: string);

    /**
     * Initializes a new instance of the ArgumentException class with a specified error message, the parameter name, and a reference to the inner exception that is the cause of this exception.
     * 
     * @param message 
     * The error message that explains the reason for the exception.
     * 
     * @param paramName 
     * The name of the parameter that caused the current exception.
     * 
     * @param innerException 
     * The exception that is the cause of the current exception. If the innerException parameter is not a null reference, the current exception is raised in a catch block that handles the inner exception.
     */
    public constructor(message: string, paramName: string, innerException: Exception);

    public constructor(message?: string, paramName?: string | Exception, innerException?: Exception)
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
                if (typeof paramName != 'string')
                {
                    super(message, paramName);
                }
                else
                {
                    this.paramName = paramName;
                }
                break;
            case 3:
                super(message, innerException);
                this.paramName = <string>paramName;
                break;
        }
    }

    /**
     * Gets the name of the parameter that causes this exception.
     */
    public get ParamName(): string
    {
        return this.paramName;
    }
}