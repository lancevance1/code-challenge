<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function index()
    {
//        $response = Http::get('https://api.unsplash.com/search/photos', [
//            'query' => 'haha',
//            'page' => 1,
//            'client_id'=>'wu6uBElgkanxZD7v3iT1Ekqm9ejk8vsLdBWKcXeIwaI,'
//        ]);
        return view('welcome');
    }
//    public function __construct()
//    {
//        $this->middleware('auth');
//    }
//
//    public function index()
//    {
//
//        return view('contacts.index',compact('contacts','customer'));
//    }
//
//    public function create(Customer $customer)
//    {
//        //$data =  $request->session()->get('status');;
//        return view('contacts.create',compact('customer'));
//    }
//
//    public function store(Request $request, Customer $customer)
//    {
//        //dd($customer);
//        $data = $request->validate([
//            'name' => 'required',
//            'phone' => 'required_without:email',
//            'email' => 'required_without:phone',
//            'fax' => '',
//
//
//        ]);
//
//        $contact = Contact::create($data);
//        $contact->customer_id = $customer->id;
//        $contact->push();
//        //dd($customer->contacts);
//        return redirect('customers/')->with('status','New contact created');
//    }
//
//    public function show(Customer $customer,Contact $contact)
//    {
//        return view('contacts.show',[
//            'contact' => $contact,
//            'customer' => $customer,
//        ]);
//    }
//
//    public function edit(Customer $customer,Contact $contact)
//    {
//        return view('contacts.edit', compact('customer','contact'));
//    }
//
//    public function update(Request $request, Customer $customer,Contact $contact)
//    {
//
//        $data = $request->validate([
//            'name' => 'required',
//            'phone' => 'required_without:email',
//            'email' => 'required_without:phone',
//            'fax' => '',
//        ]);
//        try {
//
//            $contact->update($data);
//        }catch (\Exception $e) {
//            echo $e;
//            //report($e);;
//        }
//
//
//        //return view('contacts.show',compact('contact'));
//        return redirect('customers/')->with('status','Contact modified');
//
//    }
//
//    public function destroy(Customer $customer, Contact $contact)
//    {
//        try {
////            dd($contact);
//            $contact->delete();
//            return \redirect('customers')->with('status','Successfully Deleted');
//        } catch (\Exception $e) {
//            echo $e;
//        }
//    }
}
