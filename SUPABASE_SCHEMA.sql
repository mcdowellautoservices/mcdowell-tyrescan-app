create table if not exists tyre_reports (
  id text primary key,
  created_at timestamptz default now(),
  registration text,
  tyre_size text not null,
  brand_guess text,
  tread_depth_mm numeric,
  condition text check (condition in ('green','amber','red')),
  dot_age_years numeric,
  wear_pattern text,
  pressure_risk text,
  alignment_risk text,
  recommendations jsonb default '[]'::jsonb,
  price_estimate text
);

create table if not exists bookings (
  id text primary key,
  created_at timestamptz default now(),
  name text not null,
  phone text not null,
  email text,
  registration text,
  service text not null,
  preferred_date text,
  notes text,
  report_id text references tyre_reports(id),
  status text default 'new'
);

create table if not exists quote_requests (
  id text primary key,
  created_at timestamptz default now(),
  name text not null,
  phone text not null,
  registration text,
  tyre_size text,
  quantity text,
  budget text,
  notes text,
  status text default 'new'
);

alter table tyre_reports enable row level security;
alter table bookings enable row level security;
alter table quote_requests enable row level security;

create policy "public insert tyre reports" on tyre_reports for insert with check (true);
create policy "public insert bookings" on bookings for insert with check (true);
create policy "public insert quotes" on quote_requests for insert with check (true);

-- For demo admin screen only. Before public launch, replace with authenticated admin-only read policies.
create policy "demo read tyre reports" on tyre_reports for select using (true);
create policy "demo read bookings" on bookings for select using (true);
create policy "demo read quotes" on quote_requests for select using (true);
