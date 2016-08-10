/**
 * Created by HP-PC on 02-06-2016.
 */
var TestCounter = React.createClass({
    render: function () {
        return(
            <div className="counterContainer">
                <h3>Current Counter Value: </h3>
                <Counter />
            </div>
        );
    }
});

var Counter = React.createClass({
    getInitialState: function () {
        return {
            Count: 0
        };
    },
    IncrementCount: function () {
        this.setState({Count: this.state.Count+1});
    },
    ResetCount: function () {
        this.setState({Count: 0});
    },
    render: function () {
        return (
            <div className="displayCounter">
                <h1>
                    {this.state.Count}
                </h1>
                <form>
                    <input type="button" onClick={this.IncrementCount} value="Increment"/>
                    <input type="button" onClick={this.ResetCount} value="Reset" />
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <TestCounter />,
    document.getElementById('CNT')
);