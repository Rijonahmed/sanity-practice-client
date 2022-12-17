import React, { useEffect, useState } from 'react';
import { client } from '../../Lib/Client';

const ResortFeatures = () => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    client.fetch(
      `*[_type == "resortFeatures"] {
        title,
        slug,
        body,
        publishedAt,
        resortImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
        "name": authou -> name,
      }| order(publishedAt desc)`
    )
      .then((data) => {
        setStories(data);

      })
      .catch(console.error);

  }, [])
  return (
    <div className='my-10'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 mx-auto mt-5 max-w-7xl '>

        <div className="card hover:bg-base-100 shadow-xl">

          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Resort Features</h2>


          </div>
        </div>

        {
          stories.map((item, idx) => {
            return (

              <div key={idx} className="card hover:bg-base-100 shadow-xl">
                <figure className="">
                  <img src={item?.resortImage.asset.url} alt="clock" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title font-bold">{item?.title}</h2>
                  {/* <p>{item?.description.slice(0, 70)}</p> */}

                </div>
              </div>
            )
          })
        }




      </div>
    </div>
  );
};

export default ResortFeatures;