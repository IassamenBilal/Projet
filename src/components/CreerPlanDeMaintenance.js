import React, { Component } from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";

export default class CreerPlanDeMaintenance extends Component {
  state = {
    niveauDemaintenance: "",
    repeterChaque: "",
    repeterEn: {
      dimanche: false,
      lundi: false,
      mardi: false,
      marcredi: false,
      jeudi: false,
    },
    piece: "",
    description: "",
    datedebut: "",
    datefin: "date",
  };

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            repeterEn: {
              ...prevState.repeterEn,
              [name]: checked,
            },
          };
        })
      : this.setState(() => {
          return {
            [name]: value,
          };
        });
  };
  render() {
    return (
      <div className="content">
        <TopNavBar />
        <SideNavBar />
        <div className="section1">
          <h2>Créer un plan d'intervention</h2>
          <div className="plan-maintenance1">
            <form action="" className="form-group">
              <div className="form1">
                <div className="labels">
                  <div>
                    <label for="niveau">Niveau de maintenance</label>
                  </div>
                  <div>
                    <label for="repeter">Répeter chaque</label>
                  </div>
                  <div>
                    <label for="">Répeter en</label>
                  </div>
                  <div>
                    <label for="piece">La pièce</label>
                  </div>
                  <div>
                    <label for="description">Description</label>
                  </div>
                  <div>
                    <label for="datedebut">Date Début</label>
                  </div>
                  <div>
                    <label for="datefin">Date Fin</label>
                  </div>
                </div>

                <div className="inputs">
                  <div>
                    <select
                      name="niveauDemaintenance"
                      className="form-control"
                      onChange={this.handleChange}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="repeat">
                    <input
                      type="number"
                      name="repeterChaque"
                      onChange={this.handleChange}
                      className="form-control"
                    />
                    <select className="form-control">
                      <option value="semaine">Semaine</option>
                      <option value="mois">Mois</option>
                      <option value="annee">Année</option>
                    </select>
                  </div>
                  <div className="check">
                    <div className="check-box">
                      <input
                        type="checkbox"
                        name="dimanche"
                        onChange={this.handleChange}
                        checked={this.state.repeterEn.dimanche}
                      />
                      <label for="dimanche">Dimanche</label>
                    </div>
                    <div className="check-box">
                      <input
                        type="checkbox"
                        onChange={this.handleChange}
                        name="lundi"
                        checked={this.state.repeterEn.lundi}
                      />
                      <label for="lundi">Lundi</label>
                    </div>
                    <div className="check-box">
                      <input
                        type="checkbox"
                        name="mardi"
                        onChange={this.handleChange}
                        checked={this.state.repeterEn.mardi}
                      />
                      <label for="mardi">Mardi</label>
                    </div>
                    <div className="check-box">
                      <input
                        type="checkbox"
                        onChange={this.handleChange}
                        name="mercredi"
                        checked={this.state.repeterEn.marcredi}
                      />
                      <label for="mercredi">Mercredi</label>
                    </div>
                    <div className="check-box">
                      <input
                        type="checkbox"
                        name="jeudi"
                        onChange={this.handleChange}
                        checked={this.state.repeterEn.jeudi}
                      />
                      <label for="jeudi">Jeudi</label>
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="piece"
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                  <div>
                    <textarea
                      name="description"
                      cols="4"
                      rows="2"
                      className="form-control"
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                  <div>
                    <input
                      type="date"
                      name="datedebut"
                      id=""
                      className="form-control"
                    />
                  </div>
                  <div className="datefin">
                    <input
                      type="radio"
                      name="datefin"
                      onChange={this.handleChange}
                      value="date"
                      checked={this.state.datefin === "date" ? true : false}
                    />
                    <input
                      type="date"
                      name="datefin"
                      id=""
                      className="form-control"
                      disabled={this.state.datefin === "date" ? false : true}
                    />
                  </div>
                  <div className="datefin">
                    <input
                      type="radio"
                      name="datefin"
                      onChange={this.handleChange}
                      value="occurence"
                    />
                    <input
                      type="number"
                      name="datefin"
                      id=""
                      className="form-control"
                      disabled={this.state.datefin === "date" ? true : false}
                    />
                    <p>Occurences</p>
                  </div>
                  <div>
                    <input type="file" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button className="btn btn-primary">Annuler</button>
                <button className="btn btn-primary  btn-creer">Créer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
