var React = require('react')
var moment = require('moment')
var _ = require('_')
var fetchJson = require('./utilities/fetch-json.js')
var Alert = require('react-s-alert').default
import AceEditor from 'react-ace'
import 'brace/mode/sql'
import 'brace/theme/sqlserver'
var chartDefinitions = require('./components/ChartDefinitions.js')
var Label = require('react-bootstrap/lib/Label')
var Form = require('react-bootstrap/lib/Form')
var FormGroup = require('react-bootstrap/lib/FormGroup')
var FormControl = require('react-bootstrap/lib/FormControl')
var ControlLabel = require('react-bootstrap/lib/ControlLabel')
var ListGroup = require('react-bootstrap/lib/ListGroup')
var Button = require('react-bootstrap/lib/Button')
var Table = require('react-bootstrap/lib/Table')
var Glyphicon = require('react-bootstrap/lib/Glyphicon')
var Popover = require('react-bootstrap/lib/Popover')
var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger')
import navigateToClickHandler from './utilities/navigateToClickHandler'

var IndexModelList = React.createClass({

  render: function () {
    const tableInstance = (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </Table>
    );

    return tableInstance;
  }
});

module.exports = IndexModelList
