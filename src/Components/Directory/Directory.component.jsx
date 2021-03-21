import React from "react";

import MenuItem from "../Menu-Item/MenuItem.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "journey",
          imageUrl: "https://i.ibb.co/NnPSX2N/inspirational-image6.jpg",
          id: 1,
          linkUrl: "shop/journey",
        },
        {
          title: "family",
          imageUrl: "https://i.ibb.co/Y8bpZXB/inspirational-image4.jpg",
          id: 2,
          linkUrl: "shop/family",
        },
        {
          title: "victory",
          imageUrl: "https://i.ibb.co/KwjMLVX/inspirational-image1.jpg",
          id: 3,
          linkUrl: "shop/victory",
        },
        {
          title: "battle",
          imageUrl: "https://i.ibb.co/ChYKrMJ/inspirational-image2.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/battle",
        },
        {
          title: "relationship",
          imageUrl: "https://i.ibb.co/rvZzfvJ/inspirational-image5.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/relationship",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...OtherSectionProps }) => (
          <MenuItem key={id} {...OtherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
