import "./Section-Form.css";
import ProfileImg from "./assets/profile-img.png";
import EditProfileImg from "./assets/edit-img.svg";
const SectionForm = () => {
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
          <div className="form-wrapper">
            <div className="form-profile-img">
              <img src={ProfileImg} alt="Profile" height={132} width={132} />
              <button className="edit-profile-img">
                <img src={EditProfileImg} alt="Редактировать" />
              </button>
            </div>

            <div className="form-box">
              <div className="left-panel">
                <div className="input-box">
                  <label for="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    aria-describedby="name"
                    placeholder="Charline Reed"
                  />
                </div>

                <div className="input-box">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    aria-describedby="email"
                    placeholder="charlenereed@gmail.com "
                  />
                </div>

                <div className="input-box">
                  <label for="dateBirth" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateBirth"
                    aria-describedby="dateBirth"
                    placeholder="25 January 1990"
                  />
                </div>

                <div className="input-box">
                  <label for="PermanentAddress" className="form-label">
                    Permanent Address
                  </label>
                  <input
                    type="text"
                    id="PermanentAddress"
                    aria-describedby="PermanentAddress"
                    placeholder="San Jose, California, USA"
                  />
                </div>

                <div className="input-box">
                  <label for="Postal-Code">Postal Code</label>
                  <input
                    type="number"
                    class="form-control"
                    id="Postal-Code"
                    aria-describedby="Postal Code"
                    placeholder="45962"
                  />
                </div>
              </div>

              <div className="right-panel">
                <div className="input-box">
                  <label for="userName" className="form-label">
                    User Name
                  </label>
                  <input
                    placeholder="Charlene Reed"
                    type="text"
                    id="userName"
                  />
                </div>

                <div className="input-box">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input type="password" id="password" placeholder="*****" />
                </div>

                <div className="input-box">
                  <label for="presentAddress" className="form-label">
                    Present Address
                  </label>
                  <input type="text" id="presentAddress" />
                </div>

                <div className="input-box">
                  <label for="city">City</label>
                  <input type="text" placeholder="San Jose" id="city" />
                </div>

                <div className="input-box">
                  <label for="country">Country</label>
                  <input type="text" placeholder="USA" id="country" />
                </div>
              </div>
            </div>
          </div>

          <div className="form-button">
            <button>Save</button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default SectionForm;
