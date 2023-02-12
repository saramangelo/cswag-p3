import Card from 'react-bootstrap/Card';
import Navbar from '../components/Navbar';
import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../utils/mutations';
import { QUERY_MATCHUPS } from '../utils/queries';

const ViewTicket = () => {
  
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    variables: { _id: id },
  });

  const matchup = data?.matchups || [];

  const [createVote, { error }] = useMutation(CREATE_VOTE);

  const handleVote = async (techNum) => {
    try {
      await createVote({
        variables: { _id: id, techNum: techNum },
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
    <Navbar/>
      
    <Card className="text-center">
      <Card.Header>Ticket</Card.Header>
      <Card.Body>
        <Card.Title>Ticket Details</Card.Title>
        <Card.Text>
          Import ticket data here
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
    </>
  );
}

export default ViewTicket;