import { ArgumentException } from "./ArgumentException";
import { Exception } from "./Exception";

/**
 * The exception that is thrown when a method attempts to construct a culture that is not available.
 */
export class CultureNotFoundException extends ArgumentException
{
    /**
     * The culture identifier that cannot be found.
     */
    private invalidCultureId: number;

    /**
     * The culture name that cannot be found.
     */
    private invalidCultureName: string;

    /**
     * Initializes a new instance of the CultureNotFoundException class with its message string set to a system-supplied message.
     */
    public constructor();

    /**
     * Initializes a new instance of the CultureNotFoundException class with the specified error message.
     * 
     * @param message
     * The error message to display with this exception.
     */
    public constructor(message: string);

    /**
     * Initializes a new instance of the CultureNotFoundException class with a specified error message and a reference to the inner exception that is the cause of this exception.
     * 
     * @param message
     * The error message to display with this exception.
     * 
     * @param innerException
     * The exception that is the cause of the current exception. If the _innerException_ parameter is not **null**, the current exception is raised in a **catch** block that handles the inner exception.
     */
    public constructor(message: string, innerException: Exception);

    /**
     * Initializes a new instance of the CultureNotFoundException class with a specified error message, the invalid Culture ID, and a reference to the inner exception that is the cause of this exception.
     * 
     * @param message
     * The error message to display with this exception.
     * 
     * @param invalidCultureId
     * The Culture ID that cannot be found.
     * 
     * @param innerException
     * The exception that is the cause of the current exception. If the innerException parameter is not a null reference, the current exception is raised in a catch block that handles the inner exception.
     */
    public constructor(message: string, invalidCultureId: number, innerException: Exception);

    /**
     * Initializes a new instance of the CultureNotFoundException class with a specified error message, the invalid Culture ID, and the name of the parameter that is the cause this exception.
     * 
     * @param paramName
     * The name of the parameter that is the cause the current exception.
     * 
     * @param invalidCultureId
     * The Culture ID that cannot be found.
     * 
     * @param message
     * The error message to display with this exception.
     */
    public constructor(paramName: string, invalidCultureId: number, message: string);

    /**
     * Initializes a new instance of the CultureNotFoundException class with a specified error message and the name of the parameter that is the cause this exception.
     * 
     * @param paramName
     * The name of the parameter that is the cause of the current exception.
     * 
     * @param message
     * The error message to display with this exception.
     */
    public constructor(paramName: string, message: string);

    /**
     * Initializes a new instance of the CultureNotFoundException class with a specified error message, the invalid Culture Name, and a reference to the inner exception that is the cause of this exception.
     * 
     * @param message
     * The error message to display with this exception.
     * 
     * @param invalidCultureName
     * The Culture Name that cannot be found.
     * 
     * @param innerException
     * The exception that is the cause of the current exception. If the innerException parameter is not a null reference, the current exception is raised in a catch block that handles the inner exception.
     */
    public constructor(message: string, invalidCultureName: string, innerException: Exception);

    public constructor(message?: string, invalidCulture?: Exception | number | string, innerException?: Exception | string)
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
                if (typeof invalidCulture != 'string')
                {
                    super(message, <Exception>invalidCulture);
                }
                else
                {
                    super(invalidCulture, message);
                }
                break;
            case 3:
                if (typeof invalidCulture == 'number')
                {
                    if (typeof innerException != 'string')
                    {
                        super(message, <Exception>innerException);
                    }
                    else
                    {
                        super(innerException, message);
                    }

                    this.invalidCultureId = <number>invalidCulture;
                }
                else
                {
                    if (typeof innerException != 'string')
                    {
                        super(message, <Exception>innerException);
                    }
                    else
                    {
                        super(innerException, message);
                    }

                    this.invalidCultureName = <string>invalidCulture;
                }
                break;
        }
    }

    /**
     * Gets the culture identifier that cannot be found.
     */
    public get InvalidCultureId(): number
    {
        return this.invalidCultureId;
    }

    /**
     * Gets the culture name that cannot be found.
     */
    public get InvalidCultureName(): string
    {
        return this.invalidCultureName;
    }
}