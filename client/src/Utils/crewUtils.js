export const formatCrewData = (crew) => {
    return crew.map(({ crew_id, crew_name, images }) => {
      const imageArray = images.map(image => ({
        imagename: image.imagename,
        caption: image.caption
      }));
      return { crew_id, crew_name, images: imageArray };
    });
  };