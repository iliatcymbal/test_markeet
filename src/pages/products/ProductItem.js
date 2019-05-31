import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import {InputText} from '../../components/InputText';

export default ({
                  id,
                  title,
                  titleInEdit,
                  updateTitle,
                  activate,
                  setTitleInEdit,
                  remove,
                  image,
                }) => (
  <li>
    <div className='product-box'>
      <span className="product-controls">
        <span
          className='edit'
          onClick={() => setTitleInEdit(id)}
        >
          <FaRegEdit className="test"/>
        </span>

        <span
          className='remove'
          onClick={() => remove(id, title)}
        >
          <FaRegTrashAlt />
        </span>
      </span>

      <img src={image || "images/bag.png"} alt="product"/>
    </div>

    <InputText
      text={title}
      active={titleInEdit}
      deactivate={updateTitle}
      activate={activate}
      id={id}
    />
  </li>
);
