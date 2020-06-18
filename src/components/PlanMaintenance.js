import React, { Component } from "react";
import SideNavBar from "./SideNavBar";
import TopNavBar from "./TopNavBar";
import { Link } from "react-router-dom";

export default class PlanMaintenance extends Component {
  render() {
    return (
      <div className="content">
        <TopNavBar />
        <SideNavBar />
        <div className="section">
          <h2>Planning des interventions</h2>
          <div className="plan-maintenance">
            <div className="filtre-intervention">
              <h3>Filtre</h3>
              <form action="">
                <div>
                  <label for="statut">Statut</label>
                  <select name="" id="" className="form-control">
                    <option value="arrete">arreté</option>
                    <option value="arrete">en pause</option>
                    <option value="arrete">terminé</option>
                  </select>
                </div>
                <div>
                  <label for="niveau">Niveau de maintenance</label>
                  <select name="" id="" className="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div>
                  <label for="piece">Type de pièce</label>
                  <select name="" id="" className="form-control">
                    <option value="piece">Pièce 1</option>
                    <option value="piece">Pièce 1</option>
                    <option value="piece">Pièce 2</option>
                  </select>
                </div>
                <div>
                  <label for="intervalle">Intervalle</label>
                  <div className="dates">
                    <input
                      type="date"
                      name=""
                      id="date debut"
                      className="form-control"
                    />
                    <input
                      type="date"
                      name="date fin"
                      id=""
                      className="form-control"
                    />
                  </div>
                </div>
                <div>
                  <label for="statut">Mots clés</label>
                  <textarea
                    name=""
                    id=""
                    cols="3"
                    rows="2"
                    className="form-control"
                    placeholder="mots cle"
                  ></textarea>
                </div>
                <div className="btn-form">
                  <button className="btn btn-primary">Appliquer</button>
                </div>
              </form>
            </div>
            <hr />
            <div class="table-intervention">
              <Link to="creerplandemaintenance">
                <button class="btn btn-primary m-3">
                  Créer plan de maintenance
                </button>
              </Link>
              <table class="table">
                <thead>
                  <th>Piece</th>
                  <th>Vehicule</th>
                  <th>Date debut</th>
                  <th>Date fin</th>
                  <th>Occurence</th>
                  <th>Statut</th>
                </thead>
                <tbody>
                  <tr>
                    <td>lorem3</td>
                    <td>lorem3</td>
                    <td>lorem3</td>
                    <td>lorem3</td>
                    <td>lorem3</td>
                    <td>lorem3</td>
                  </tr>
                  <tr>
                    <td>lorem3</td>
                    <td>lorem3</td>
                    <td>lorem3</td>
                    <td>lorem3</td>
                    <td>lorem3</td>
                    <td>lorem3</td>
                  </tr>
                  <tr>
                    <td>lorem3</td>
                    <td>lorem3</td>
                    <td>lorem3</td>
                    <td>lorem3</td>
                    <td>lorem3</td>
                    <td>lorem3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
