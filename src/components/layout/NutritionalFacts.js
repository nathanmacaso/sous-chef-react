import React from 'react'

const NutritionalFacts = (props) => {
  const { nf, serving } = props;
  let nutritionFacts;
  if(nf) {
    nutritionFacts = 
      <table>
        <thead>
          <tr>
            <th colSpan="2" className="nf-header">Nutrition Facts</th>
          </tr>
          <tr>
            <th colSpan="2" className="nf-servings"><strong>Servings:  </strong>{serving}</th>
          </tr>
        </thead> 
        <tbody>
          <tr>
            <td colSpan="2"><strong className="nf-amount">Amount per serving</strong></td> 
          </tr> 
          <tr className="nf-border-2">
            <td><strong className="nf-calories">Calories</strong></td> 
            <td className="nf-right"><strong className="nf-calories">{nf.calories}</strong></td>
          </tr> 
          <tr className="nf-border-1">
            <td colSpan="2" className="nf-right"><strong>% Daily Value*</strong></td>
          </tr> 
          <tr className="nf-border-1">
            <td><strong>Total Fat </strong>{nf.totalFat.amount}</td> 
            <td className="nf-right">{nf.totalFat.percentage}</td>
          </tr> 
          <tr className="nf-border-1">
            <td className="nf-padding">Saturated Fat {nf.saturatedFat.amount}</td> 
            <td className="nf-right">{nf.saturatedFat.percentage}</td>
          </tr> 
          <tr className="nf-border-1">
            <td><strong>Cholesterol </strong>{nf.cholesterol.amount}</td> 
            <td className="nf-right">{nf.cholesterol.percentage}</td>
          </tr> 
          <tr className="nf-border-1">
            <td><strong>Sodium </strong>{nf.sodium.amount}</td> 
            <td className="nf-right">{nf.sodium.percentage}</td>
          </tr> 
          <tr className="nf-border-1">
            <td><strong>Total Carbohydrate </strong>{nf.totalCarb.amount}</td> 
            <td className="nf-right">{nf.totalCarb.percentage}</td>
          </tr> 
          <tr className="nf-border-1">
            <td className="nf-padding">Dietary Fiber {nf.dietaryFiber.amount}</td> 
            <td className="nf-right">{nf.dietaryFiber.percentage}</td>
          </tr> 
          <tr className="nf-border-1">
            <td colSpan="2" className="nf-padding">Total Sugars {nf.totalSugars.amount}</td> 
          </tr>
          <tr className="nf-border-3">
            <td colSpan="2"><strong>Protein </strong>{nf.protein.amount}</td> 
          </tr>
          <tr className="nf-border-1">
            <td>Vitamin D {nf.vitaminD.amount}</td> 
            <td className="nf-right">{nf.vitaminD.percentage}</td>
          </tr> 
          <tr className="nf-border-1">
            <td>Calcium {nf.calcium.amount}</td> 
            <td className="nf-right">{nf.calcium.percentage}</td>
          </tr> 
          <tr className="nf-border-1">
            <td>Iron {nf.iron.amount}</td> 
            <td className="nf-right">{nf.iron.percentage}</td>
          </tr> 
          <tr className="nf-border-1">
            <td>Potassium {nf.potassium.amount}</td> 
            <td className="nf-right">{nf.potassium.percentage}</td>
          </tr> 
        </tbody> 
        <tfoot>
          <tr>
            <td colSpan="2">
              <em>*The % Daily Value (DV) tells you how much a nutrient in a food serving contributes to a daily diet.
              2,000 calorie a day is used for general nutrition advice.</em>
            </td>
          </tr>
        </tfoot>
      </table>
    ;
  } else {
      nutritionFacts = <h4>No Nutritional Facts Avaliable</h4>;
  }
  return (
  <div className="nutrition-label-container">
    {nutritionFacts}
  </div>
  );
}

export default NutritionalFacts;