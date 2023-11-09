import { MdDelete } from "react-icons/md";
import styled from "styled-components";

export const Container = styled.div`
    padding: 0.3125em 0.3125em 5.5em 0.3125em;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	gap: 1em;
`;

export const Wrapper = styled.div`
   position: relative;
`

export const DeleteBtn = styled(MdDelete)`
    color: var(--del-cl);
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
`