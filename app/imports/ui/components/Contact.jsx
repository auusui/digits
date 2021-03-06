import React from 'react';
import { Card, Image, Feed, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Note from './Note';
import AddNote from './AddNote';
import { Contacts } from '../../api/contact/Contacts';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class Contact extends React.Component {

  removeItem(docID) {
    /* eslint-disable-next-line */
    if (confirm("Do you want to delete this contact?") == true) {
      // eslint-disable-next-line no-template-curly-in-string
      console.log('Item to delete: ${docID}');
      Contacts.remove(docID);
    }
}

render() {
return (
    <Card>
      <Card.Content>
        <Image
            floated='right'
            size='mini'
            src={this.props.contact.image}
        />
        <Card.Header>{this.props.contact.firstName} {this.props.contact.lastName}</Card.Header>
        <Card.Meta>{this.props.contact.address}</Card.Meta>
        <Card.Description>
          {this.props.contact.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/edit/${this.props.contact._id}`}>Edit</Link>
      </Card.Content>
      <Card.Content extra>
        <Feed>
          {this.props.notes.map((note, index) => <Note key={index} note={note}/>)}
        </Feed>
      </Card.Content>
      <Card.Content extra>
        <AddNote owner={this.props.contact.owner} contactId={this.props.contact._id}/>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={() => this.removeItem(this.props.contact._id)}>
          Delete
        </Button>
      </Card.Content>
    </Card>
);
}
}

/** Require a document to be passed to this component. */
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Contact);
