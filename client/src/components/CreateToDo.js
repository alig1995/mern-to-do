import React, { Component } from "react";

class CreateTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPrioity = this.onChangeTodoPrioity.bind(this);
    this.onChangeTodoPrioity = this.onChangeTodoPrioity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }

  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  }
  onChangeTodoPrioity(e) {
    this.setState({
      todo_priority: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    console.log(`Form su`);
    console.log(this.state);

    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    });
  }
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create new to do task</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Desc</label>
            <input
              type="text"
              value={this.state.todo_description}
              className="form-control"
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible</label>
            <input
              type="text"
              value={this.state.todo_responsible}
              className="form-control"
              onChange={this.onChangeTodoResponsible}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onChangeTodoPrioity}
              />
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.onChangeTodoPrioity}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority === "High"}
                onChange={this.onChangeTodoPrioity}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Task"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default CreateTodo;
