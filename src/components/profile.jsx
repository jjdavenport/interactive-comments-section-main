const Profile = ({ data, user }) => {
  return (
    <>
      <div className="flex w-full items-center gap-4 md:w-fit">
        <img className="w-8" src={data.user.image.webp} />
        <div className="flex gap-2 leading-5">
          <span className="font-medium text-darkBlue">
            {data.user.username}
          </span>
          {data.user.username === user && (
            <span className="rounded-sm bg-moderateBlue px-1 text-sm text-white">
              {data.user.username === user && "you"}
            </span>
          )}
        </div>
        <span className="text-grayishBlue">{data.createdAt}</span>
      </div>
    </>
  );
};

export default Profile;
