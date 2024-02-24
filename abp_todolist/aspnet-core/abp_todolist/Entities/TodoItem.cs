using Volo.Abp.Domain.Entities;

namespace abp_todolist.Entities
{
    public class TodoItem : BasicAggregateRoot<Guid>
    {
        public string Text { get; set; }
    }
}
