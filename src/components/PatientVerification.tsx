import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, AlertCircle, Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface Patient {
  id: string;
  name: string;
  insurance: string;
  status: 'verified' | 'in_progress' | 'unverified';
  lastUpdated: string;
}

const patients: Patient[] = [
  { id: '1', name: 'Emily Johnson', insurance: 'Aetna Dental', status: 'verified', lastUpdated: '2 mins ago' },
  { id: '2', name: 'Michael Chen', insurance: 'Guardian', status: 'verified', lastUpdated: '5 mins ago' },
  { id: '3', name: 'Olivia Rodriguez', insurance: 'MetLife', status: 'verified', lastUpdated: '10 mins ago' },
  { id: '4', name: 'William Taylor', insurance: 'Delta Dental', status: 'verified', lastUpdated: '15 mins ago' },
  { id: '5', name: 'Amanda Kumar', insurance: 'Cigna', status: 'in_progress', lastUpdated: '20 mins ago' },
  { id: '6', name: 'David Thompson', insurance: 'United Healthcare', status: 'in_progress', lastUpdated: '25 mins ago' },
  { id: '7', name: 'Rachel Martinez', insurance: 'Humana', status: 'unverified', lastUpdated: '30 mins ago' },
  { id: '8', name: 'Christopher Lee', insurance: 'Blue Cross', status: 'unverified', lastUpdated: '35 mins ago' },
];

const statusConfig = {
  verified: {
    color: '#22C55E',
    bgColor: '#22C55E/10',
    icon: CheckCircle,
    text: 'Verified'
  },
  in_progress: {
    color: '#EAB308',
    bgColor: '#EAB308/10',
    icon: Clock,
    text: 'In Progress'
  },
  unverified: {
    color: '#6B7280',
    bgColor: '#6B7280/10',
    icon: AlertCircle,
    text: 'Unverified'
  }
};

export const PatientVerification = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPatients, setFilteredPatients] = useState(patients);

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = patients.filter(patient => 
      patient.name.toLowerCase().includes(query) ||
      patient.insurance.toLowerCase().includes(query)
    );
    setFilteredPatients(filtered);
  }, []);

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b border-gray-100 bg-gray-50/50">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-gray-900">
            Live Patient Verification
          </CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients..."
              value={searchQuery}
              onChange={handleSearch}
              aria-label="Search patients"
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A6E6] text-sm"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Patient Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Insurance</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient, index) => {
                const status = statusConfig[patient.status];
                const StatusIcon = status.icon;
                
                return (
                  <motion.tr
                    key={patient.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">{patient.name}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{patient.insurance}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`p-1 rounded-full bg-${status.bgColor}`}
                          style={{ backgroundColor: `${status.color}10` }}
                        >
                          <StatusIcon
                            className="w-4 h-4"
                            style={{ color: status.color }}
                          />
                        </div>
                        <span
                          className="text-sm font-medium"
                          style={{ color: status.color }}
                        >
                          {status.text}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{patient.lastUpdated}</td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
          {filteredPatients.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 text-gray-500"
            >
              No patients found matching "{searchQuery}"
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};