import "./Settings.css";
import EditProfileImg from "./assets/edit-img.svg";
import { api } from "../../app/api/api";
import { memo, useEffect, useState } from "react";
import avatar from "./assets/avatarUser.png";
const Settings = () => {
  const { data, isLoading } = api.useGetUserQuery();

  const [user, setUser] = useState();
  const [updateUser, { isLoading: loading }] = api.useSendUserMutation();

  useEffect(() => {
    setUser(data);
  }, [data]);

  const handleOnchange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [key]: value,
    });
  };

  const handleSendData = async () => {
    await updateUser(user);
  };

  const handleDownLoadImg = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <section className="section-form">
      <div className="section-form-wrapper">
        <div className="section-form-tab">
          <ul className="nav-tab-items">
            <li className="nav-tab-item">
              <a className="nav-tab-item-link active-tab" href="#">
                Edit Profile
              </a>
            </li>
            <li className="nav-tab-item">
              <a className="nav-tab-item-link" href="#">
                Preferences
              </a>
            </li>
            <li className="nav-tab-item">
              <a className="nav-tab-item-link" href="#">
                Security
              </a>
            </li>
          </ul>
        </div>

        <form>
          {isLoading ? (
            <h2>Загрузка...</h2>
          ) : (
            <div className="form-wrapper">
              <div className="form-profile-img">
                <img src={avatar} alt="Profile" height={132} width={132} />
                <div className="edit-profile-img">
                  <label className="edit-profile-button" htmlFor="img-profile">
                    <input
                      type="file"
                      name="img"
                      id="img-profile"
                      value={user?.img}
                      onChange={handleDownLoadImg}
                    />
                    <img src={EditProfileImg} alt="Редактировать" />
                  </label>
                </div>
              </div>

              <div className="form-box">
                <div className="left-panel">
                  <div className="input-box">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      value={user?.yourName}
                      type="text"
                      id="name"
                      name="yourName"
                      onChange={handleOnchange}
                    />
                  </div>

                  <div className="input-box">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={user?.email}
                      onChange={handleOnchange}
                    />
                  </div>

                  <div className="input-box">
                    <label htmlFor="dateBirth" className="form-label">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      id="dateBirth"
                      name="dateOfBirth"
                      value={user?.dateOfBirth}
                      onChange={handleOnchange}
                    />
                  </div>

                  <div className="input-box">
                    <label htmlFor="PermanentAddress" className="form-label">
                      Permanent Address
                    </label>
                    <input
                      value={user?.permanentAddress}
                      type="text"
                      id="PermanentAddress"
                      name="permanentAddress"
                      onChange={handleOnchange}
                    />
                  </div>

                  <div className="input-box">
                    <label htmlFor="Postal-Code">Postal Code</label>
                    <input
                      type="number"
                      id="Postal-Code"
                      value={user?.costalCode}
                      onChange={handleOnchange}
                      name="costalCode"
                    />
                  </div>
                </div>

                <div className="right-panel">
                  <div className="input-box">
                    <label htmlFor="userName" className="form-label">
                      User Name
                    </label>
                    <input
                      value={user?.userName}
                      type="text"
                      id="userName"
                      name="userName"
                      onChange={handleOnchange}
                    />
                  </div>

                  <div className="input-box">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      value={user?.password}
                      onChange={handleOnchange}
                      name="password"
                      id="password"
                    />
                  </div>

                  <div className="input-box">
                    <label htmlFor="presentAddress" className="form-label">
                      Present Address
                    </label>
                    <input
                      type="text"
                      id="presentAddress"
                      name="presentAddress"
                      value={user?.presentAddress}
                      onChange={handleOnchange}
                    />
                  </div>

                  <div className="input-box">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={user?.city}
                      onChange={handleOnchange}
                    />
                  </div>

                  <div className="input-box">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      value={user?.country}
                      name="country"
                      onChange={handleOnchange}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="form-button">
            {loading ? (
              <p>Отправка данных...</p>
            ) : (
              <button onClick={handleSendData}>Save</button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
export default memo(Settings);
