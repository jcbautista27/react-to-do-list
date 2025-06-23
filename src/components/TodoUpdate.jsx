import { FaEdit } from "react-icons/fa";

export const TodoUpdate = () => {
  return (
    <form>
      <input
        type="text"
        className="input-update"
        name="description"
        value="Aprender Php"
        placeholder="¿Que hay que hacer?"
      />

      <button className="btn-edit" type="submit">
        <FaEdit />
      </button>
    </form>
  );
};
