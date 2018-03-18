/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.biznet.soldDrug} tx - the trade to be processed
 * @transaction
 */
function transferOwnerRightsToCustomer(tx)
{
    tx.drug.sold=true;
    tx.drug.registeredLocations.push('Customer');
    return getAssetRegistry('org.example.biznet.Drug')
        .then(function (assetRegistry) {
            // Update the asset in the asset registry.
            return assetRegistry.update(tx.drug);

        })
}

/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.biznet.taxesPaid} tx - the trade to be processed
 * @transaction
 */
function paidTaxesForDrug(tx)
{
    tx.drug.taxIsPaid=true;
    
    return getAssetRegistry('org.example.biznet.Drug')
        .then(function (assetRegistry) {
            // Update the asset in the asset registry.
            return assetRegistry.update(tx.drug);

        })
}

/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.biznet.transferOwnerRightsToPharmacy} tx - the trade to be processed
 * @transaction
 */
function transferOwnerRightsToPharmacy(tx)
{
    tx.drug.owner=tx.pharmacy.uniqueId;
    tx.drug.registeredLocations.push(tx.pharmacy.name);
    return getAssetRegistry('org.example.biznet.Drug')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.drug);

        })
}

/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.biznet.transferOwnerRightsToDistributer} tx - the trade to be processed
 * @transaction
 */
function transferOwnerRightsToDistributer(tx)
{
    tx.drug.owner=tx.distributer.uniqueId;
    tx.drug.registeredLocations.push(tx.distributer.name);
    return getAssetRegistry('org.example.biznet.Drug')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.drug);

        })
}