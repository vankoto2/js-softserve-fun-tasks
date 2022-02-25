import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {id: 'q1', author: "Stanislav Monev", text: "Learning Trading is fun!"},
  {id: 'q2', author: "Julian Vatkovski", text: "Learning QA is fun!"},
  {id: 'q3', author: "Ivan Georgiev", text: "Learning React is fun!"},
]

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
