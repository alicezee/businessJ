const Contacts = () => {
    return (
        <div className="container mx-auto p-6 font-playD">
          <h1 className="text-3xl font-bold mb-4 text-center">Contacts</h1>
          <hr className="border-t border-gray-300 my-4" />
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
              <ProfileCard
                title="John Doe"
                about="balhbalhalhbalhbahalhbalhbalhb"
                imageUrl="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
              />
              <ProfileCard
                title="Jane Doe"
                about="balhbalhalhbalhbahalhbalhbalhb"
                imageUrl="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
              />
              <ProfileCard
                title="Bob"
                about="balhbalhalhbalhbahalhbalhbalhb"
                imageUrl="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
              />
            </div>

            <aside className="space-y-4">
              <h2 className="text-xl font-semibold">News & Features</h2>
              <div className="space-y-4">
                <SidebarItem
                    title="journal 1"
                    authors="john doe"
                    imageUrl="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
                />
                <SidebarItem
                    title="journal 2"
                    authors="jane doe"
                    imageUrl="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
                />
              </div>
            </aside>
          </div>
        </div>
      );
    }
    
    function ProfileCard({ title, about, imageUrl }: { title: string; about: string; imageUrl: string }) {
      return (
        <div className="flex space-x-4 border-b pb-4">
          <img src={imageUrl} alt={title} className="w-32 h-24 object-cover rounded-md" />
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-500 text-sm">{about}</p>
          </div>
        </div>
      );
    }
    
    function SidebarItem({ title, authors, imageUrl }: { title: string; authors: string; imageUrl: string }) {
      return (
        <div className="flex space-x-3">
          <img src={imageUrl} alt={title} className="w-20 h-16 object-cover rounded-md" />
          <div>
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-xs text-gray-500">{authors}</p>
          </div>
        </div>
      );
};

export default Contacts;
