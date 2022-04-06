async function newReimbursementform() {
    const amount = document.getElementById("amount").value;
    const type = document.getElementById("type").value;
    const date = document.getElementById("date").value;

    const newUserJSON = JSON.stringify(createReimbursement);

    const response = await fetch(RESOURCE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: newUserJSON

    });

    const Reimbursementform = {
        amount: amount,
        type: type,
        date: date 
    }
}