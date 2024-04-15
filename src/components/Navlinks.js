const Navlinks = () => {
  const links = [
    {
      name: "Learn about who we are",
    },
    {
      name: "Our executives",
    },
  ];

  return (
  <>
    {
        links.map(link => (
            <div>
                <div>
                    <h1>{link.name}</h1>
                </div>
            </div>
        ))
    }
  </>
  
  );
};

export default Navlinks;
