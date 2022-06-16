export const Items = ({ Item, showItem, logo, onDelete }) => {
  return (
    <div className="post-item">
      <div>
        <p>Posted By: {Item.name}</p>
      </div>
      <div>
        <img src={logo} alt="NO Image" />
      </div>
      <div key={Item.id}>
        <span>{Item.itemname}</span>

        <h5>
          Brand: {Item.brand}
          <br />
          Color:{Item.color}
          <br />
          Serial NO:{Item.serial}
          <br />
          Date Posted: {Item.date}
        </h5>
        <button className="del-btn" onClick={() => onDelete(Item.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
