import snarkdown from 'snarkdown';
import parse from 'html-react-parser';

const MarkDown = ({text}) => parse(snarkdown(text));

export default MarkDown
