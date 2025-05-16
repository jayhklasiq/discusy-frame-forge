
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserCog, Plus, Search, Filter } from 'lucide-react';
import { AdminInstructor } from '@/types/admin';
import { useForm } from 'react-hook-form';

const AdminInstructors: React.FC = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  
  // Mock data for demonstration
  const instructors: AdminInstructor[] = [
    {
      id: 1,
      name: 'Dr. Sarah Williams',
      email: 'sarah.williams@university.edu',
      department: 'Computer Science',
      coursesAssigned: 3,
      activeChats: 8,
      joinedDate: '2022-09-01',
      status: 'active'
    },
    {
      id: 2,
      name: 'Prof. James Johnson',
      email: 'james.johnson@university.edu',
      department: 'Computer Science',
      coursesAssigned: 2,
      activeChats: 5,
      joinedDate: '2023-01-15',
      status: 'active'
    },
    {
      id: 3,
      name: 'Dr. Michael Smith',
      email: 'michael.smith@university.edu',
      department: 'Business',
      coursesAssigned: 4,
      activeChats: 12,
      joinedDate: '2021-08-20',
      status: 'active'
    },
    {
      id: 4,
      name: 'Prof. Emily Davis',
      email: 'emily.davis@university.edu',
      department: 'Arts',
      coursesAssigned: 3,
      activeChats: 6,
      joinedDate: '2022-02-10',
      status: 'inactive'
    },
    {
      id: 5,
      name: 'Dr. Robert Brown',
      email: 'robert.brown@university.edu',
      department: 'Engineering',
      coursesAssigned: 0,
      activeChats: 0,
      joinedDate: '2023-05-05',
      status: 'pending'
    },
  ];

  const filteredInstructors = instructors
    .filter(instructor => instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.department.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(instructor => filterStatus === 'all' ? true : instructor.status === filterStatus);

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      department: '',
      status: 'pending',
    },
  });

  const handleAddInstructor = (data: any) => {
    console.log('New instructor data:', data);
    setIsAddDialogOpen(false);
    form.reset();
    // In a real app, you would add this instructor to your database
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Instructor Management</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus size={16} className="mr-2" />
          Add Instructor
        </Button>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search instructors..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-500" />
              <select
                className="border border-gray-200 rounded-md p-2 text-sm"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Instructors ({filteredInstructors.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Instructor</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Courses</TableHead>
                  <TableHead>Active Chats</TableHead>
                  <TableHead>Joined Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInstructors.map((instructor) => (
                  <TableRow key={instructor.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={instructor.profileImage} />
                          <AvatarFallback>{getInitials(instructor.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{instructor.name}</div>
                          <div className="text-sm text-gray-500">{instructor.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{instructor.department}</TableCell>
                    <TableCell>{instructor.coursesAssigned}</TableCell>
                    <TableCell>{instructor.activeChats}</TableCell>
                    <TableCell>{new Date(instructor.joinedDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 text-xs rounded-full capitalize ${
                        instructor.status === 'active' ? 'bg-green-100 text-green-800' :
                        instructor.status === 'inactive' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {instructor.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredInstructors.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-6">
                      <div className="flex flex-col items-center justify-center">
                        <UserCog className="h-12 w-12 text-gray-300 mb-2" />
                        <h3 className="font-medium text-gray-500">No instructors found</h3>
                        <p className="text-sm text-gray-400">Try adjusting your search or filters</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Add Instructor Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Instructor</DialogTitle>
            <DialogDescription>
              Enter the details for the new instructor
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAddInstructor)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Dr. John Doe" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@university.edu" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <FormControl>
                      <Input placeholder="Computer Science" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <select
                        className="w-full border border-gray-200 rounded-md p-2"
                        {...field}
                      >
                        <option value="pending">Pending</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Add Instructor</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminInstructors;
