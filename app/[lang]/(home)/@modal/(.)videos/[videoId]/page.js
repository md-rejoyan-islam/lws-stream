import SingleVideo from "@/components/singleVideo";
import Modal from "./model";

export default function Video({ params }) {
  return (
    <Modal>
      <SingleVideo params={params} />
    </Modal>
  );
}
