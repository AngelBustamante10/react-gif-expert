export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=2G1z1bpaPSBdYWIuEXnoxnK3quCv9cSR&q=${category}&limit=10`;
    const response = await fetch( url );
    const { data } = await response.json();  

    /* Solamente devolvemos las propiedades de necesitamos, retornando un arreglo de nuevos objetos */
    const Gifs = data.map(gift => ({
      id: gift.id,
      title: gift.title,
      url: gift.images.downsized_medium.url

    }));
 
    return Gifs;
}
