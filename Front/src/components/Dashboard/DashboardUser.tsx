import React, {useState} from "react";

const DashboardUser: React.FC = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Utilisateur");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add user submission logic here
    console.log({ name, email, role });
  };
  return (
    <>
      <div className="w-full bg-gray-300 py-4 px-5 rounded mt-6">
      <h1 className="mb-6 font-bold text-lg">Liste des utilisateurs</h1>
        <div className="overflow-x-auto">
            <table className="min-w-full rounded-lg shadow">
                <thead>
                    <tr>
                        <th className="text-left font-semibold text-gray-500 px-4 py-2">Nom</th>
                        <th className="text-left font-semibold text-gray-500 px-4 py-2">Email</th>
                        <th className="text-left font-semibold text-gray-500 px-4 py-2">Rôle</th>
                        <th className="text-left font-semibold text-gray-500 px-4 py-2">Statut</th>
                        <th className="text-left font-semibold text-gray-500 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="px-4 py-2">John Doe</td>
                        <td className="px-4 py-2">john@example.com</td>
                        <td className="px-4 py-2">Administrateur</td>
                        <td className="px-4 py-2">
                            <span className="bg-green-100 text-sm text-green-700 px-2 py-1 rounded-full">Actif</span>
                        </td>
                        <td className="px-4 py-2">
                            <button className="text-blue-500 mr-4">Éditer</button>
                            <button className="text-red-500">Supprimer</button>
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">Jane Smith</td>
                        <td className="px-4 py-2">jane@example.com</td>
                        <td className="px-4 py-2">Utilisateur</td>
                        <td className="px-4 py-2">
                            <span className="bg-yellow-100 text-sm text-yellow-700 px-2 py-1 rounded-full">En attente</span>
                        </td>
                        <td className="px-4 py-2">
                            <button className="text-blue-500 mr-4">Éditer</button>
                            <button className="text-red-500">Supprimer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="w-full bg-gray-300 py-4 px-5 rounded mt-6">
    <h2 className="text-lg font-bold mb-4">Ajouter un nouvel utilisateur</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Nom
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="role">
            Rôle
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Utilisateur">Utilisateur</option>
            <option value="Administrateur">Administrateur</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Ajouter l'utilisateur
        </button>
      </form>
    </div>
    </>
    
  );
};

export default DashboardUser;
