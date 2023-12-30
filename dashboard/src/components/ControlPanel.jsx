import "./ControlPanel.css";
import Users from "./Content/Users";

export default function ControlPanel() {
  return (
    <section className='sectionControlPanel'>
      <h3>Panel de control</h3>

      <Users />
    </section>
  );
}
