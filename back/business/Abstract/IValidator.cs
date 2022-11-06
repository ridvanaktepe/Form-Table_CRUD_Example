namespace back.business.Abstract
{
    public interface IValidator<T>
    {
        string _errorMessage { get; set; }
        bool Validation(T entity);
    }
}