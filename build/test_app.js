/**
 * Created by HP-PC on 02-06-2016.
 */
var BookingFrame = React.createClass({
    render: function () {
        return (
            <EngineHeader />
        );
    }
});

var EngineHeader = React.createClass({
    getInitialState: function () {
        return {
            BookingQuery: false
        }
    },

    RelayQuery: function () {

    },

    ReturnBack: function () {

    },

    render: function () {
        if (this.state.BookingQuery === false) {
            return (
                <div class="BookingDisplay" >
                    <EnterQuery />
                    <input type="button" onClick={this.RelayQuery} value="Book" />
                </div>
            );
        }
        else {
            return (
                <div class="ResultsDisplay" >
                    <DisplayQuery />
                    <input type="button" onClick={this.ReturnBack} value="Go Back" />
                </div>
            );
        }
    }
});

var EnterQuery = React.createClass({
    getInitialState: function () {
        return {
            Origin: "",
            Destination: "",
            DateDep: "",
            DateArr: "",
            NoPax: 0,
            Entry: false
        };
    },
    HandleChangeOrigin: function (val) {
        this.setState({Origin: val.target.value});
    },
    HandleChangeDestination: function (val) {
        this.setState({Destination: val.target.value});
    },
    HandleChangeDateDep: function (val) {
        this.setState({DateDep: val.target.value});
    },
    HandleChangeDateArr: function (val) {
        this.setState({DateArr: val.target.value});
    },
    CheckState: function () {
        if (
            this.state.Origin.length > 0 &&
            this.state.Destination.length > 0 &&
            this.state.DateDep.length > 0 &&
            this.state.DateArr.length > 0 &&
            this.state.NoPax.length > 0
        ) this.setState({Entry: true});
        else
            this.setState({Entry: false});
    },
    render: function () {
        this.CheckState();
        return (
            <form data={this.state.Entry}>
                <input type="text" value={this.state.Origin} onChange={this.HandleChangeOrigin} placeholder="Enter Origin" />
                <input type="text" value={this.state.Destination} onChange={this.HandleChangeDestination} placeholder="Enter Destination" />
                <input type="date" value={this.state.DateDep} onChange={this.HandleChangeDateDep} placeholder="" />
                <input type="date" value={this.state.DateArr} onChange={this.HandleChangeDateArr} placeholder="" />
                <select id="PaxSelector">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </form>
        );
    }
});

ReactDOM.render(
    <BookingFrame />,
    document.getElementById('Parent')
);