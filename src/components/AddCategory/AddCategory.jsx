import { addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { categoryCollection } from "../../firebase";
import { AppContext } from "../../App";
import { uploadCategoryPhoto } from "../../firebase";

export default function AddCategory({}) {
  const { user } = useContext(AppContext);
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState(null);

  if (!user || !user.isAdmin) {
    return null;
  }

  function onChangeCategory(event) {
    setCategory(event.target.value);
  }

  function onChangePicture(event) {
    const file = event.target.files[0];
    setPicture(file);
  }

  function onAddCategory() {
    const name = category.trim();

    if (name.length < 5) {
      alert(
        "Please provide a category name with minimum length of 5 characters."
      );

      return;
    }
    uploadCategoryPhoto(picture)
        .then((pictureUrl) =>
          addDoc(categoryCollection, {
            name: name,
            picture: pictureUrl,
            path: name.replaceAll(" ", "-").toLocaleLowerCase(),
          })
        )
        .then(() => {
          setName("");

          setPicture(null);
        })
        .catch((error) => {
          console.log("Failed to add category:", error);
        });
  }

  return (
    <div className="AddCategory">
      <input
        size="15"
        type="text"
        value={category}
        placeholder="Category name"
        onChange={onChangeCategory}
      />

      <label>
        Picture:
        <input type="file" name="picture" onChange={onChangePicture} required />
      </label>

      <button onClick={onAddCategory}>+</button>
    </div>
  );
}
