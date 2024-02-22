const AdminSideMailBody = ({ name, email, phone, company, service }) => {

    const result = `
        <table border="1px">
            <tr>
                <td>Name</td>
                <td>${name}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>${email}</td>
            </tr>
            <tr>
                <td>Phone-Number</td>
                <td>${phone}</td>
            </tr>
            <tr>
                <td>Company</td>
                <td>${company}</td>
            </tr>
            <tr>
                <td>Service</td>
                <td>${service}</td>
            </tr>
        </table>
    `;
    return result;
}


module.exports = AdminSideMailBody;